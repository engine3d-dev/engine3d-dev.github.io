param (
    [Parameter(Mandatory=$true)]
    [string]$UserGivenPath
)

# Extract the final folder name
$FinalFolderName = Split-Path $UserGivenPath -Leaf

# 1. Remove folder docs/Documentation/API_Release if it exists
if (Test-Path "./docs/Documentation/API_Release") {
    Write-Host "Removing folder docs/Documentation/API_Release..."
    Remove-Item -Recurse -Force "docs/Documentation/API_Release"
}
# 2. Remove folder doxygen_output if it exists
if (Test-Path "./doxygen_output") {
    Write-Host "Removing folder doxygen_output..."
    Remove-Item -Recurse -Force "./doxygen_output"
}

# 3. Run Doxygen with the User Given Path
Write-Host "Running Doxygen with input path: $UserGivenPath..."
$DoxyfileTemp = "ProcessedDoxyfile_api"
(Get-Content Doxyfile_api | Where-Object {$_ -notmatch "^INPUT ="} ) | Set-Content $DoxyfileTemp
Add-Content $DoxyfileTemp "INPUT = $UserGivenPath"
& doxygen $DoxyfileTemp
Remove-Item $DoxyfileTemp

# 4. Change directory to Sphinx/source
Set-Location "Sphinx/source"

# 5. Remove folder matching the final folder name
if (Test-Path $FinalFolderName) {
    Write-Host "Removing folder $FinalFolderName..."
    Remove-Item -Recurse -Force $FinalFolderName
}

# 6. Run the Python script
Write-Host "Running Python script generate_sphinx_dyn.py..."
python generate_sphinx_dyn.py

# 7. Build Sphinx documentation
Write-Host "Building Sphinx documentation..."
sphinx-build -b html . ../../docs/Documentation/API_Release

# 8. Return to the root directory
Set-Location "../.."