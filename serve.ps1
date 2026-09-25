# Local preview server for development only. (Double-clicking index.html also works.)
# NOTE: keep this file ASCII-only; Windows PowerShell 5.1 misreads UTF-8 without BOM.

$Port = 8080
$root = $PSScriptRoot
$mime = @{ ".html"="text/html; charset=utf-8"; ".css"="text/css; charset=utf-8"; ".js"="application/javascript; charset=utf-8"; ".json"="application/json"; ".png"="image/png"; ".jpg"="image/jpeg"; ".jpeg"="image/jpeg"; ".svg"="image/svg+xml"; ".webp"="image/webp"; ".ico"="image/x-icon" }

$listener = New-Object System.Net.Sockets.TcpListener([System.Net.IPAddress]::Loopback, $Port)
$listener.Start()
Write-Host "Serving $root at http://localhost:$Port/"

while ($true) {
  $client = $listener.AcceptTcpClient()
  try {
    $client.ReceiveTimeout = 2000   # do not hang on idle preconnect sockets
    $client.SendTimeout = 10000
    $stream = $client.GetStream()
    $stream.ReadTimeout = 2000
    $reader = New-Object System.IO.StreamReader($stream)
    $requestLine = $reader.ReadLine()
    while (($line = $reader.ReadLine()) -ne $null -and $line -ne "") { }   # skip request headers
    $path = "/"
    if ($requestLine -match "^\w+\s+(\S+)") { $path = $matches[1].Split("?")[0] }
    $path = [Uri]::UnescapeDataString($path)
    if ($path -eq "/") { $path = "/index.html" }
    $file = Join-Path $root ($path -replace "/", "\")

    if ((Test-Path $file -PathType Leaf) -and ([IO.Path]::GetFullPath($file)).StartsWith($root)) {
      $bytes = [IO.File]::ReadAllBytes($file)
      $ext = [IO.Path]::GetExtension($file).ToLower()
      $type = if ($mime[$ext]) { $mime[$ext] } else { "application/octet-stream" }
      $status = "200 OK"
    } else {
      $bytes = [Text.Encoding]::UTF8.GetBytes("404 Not Found")
      $type = "text/plain"; $status = "404 Not Found"
    }
    $header = "HTTP/1.1 $status`r`nContent-Type: $type`r`nContent-Length: $($bytes.Length)`r`nCache-Control: no-cache`r`nConnection: close`r`n`r`n"
    $hb = [Text.Encoding]::ASCII.GetBytes($header)
    $stream.Write($hb, 0, $hb.Length)
    $stream.Write($bytes, 0, $bytes.Length)
    $stream.Flush()
  } catch { } finally { $client.Close() }
}
