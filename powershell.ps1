# Variables
$resourceGroupName = "example-resources"
$location = "East US"
$storageAccountName = "examplestoraccount"
$storageSkuName = "Standard_LRS" # Standard Locally Redundant Storage

# Create a new resource group
New-AzResourceGroup -Name $resourceGroupName -Location $location

# Create a new storage account
New-AzStorageAccount -Name $storageAccountName `
                     -ResourceGroupName $resourceGroupName `
                     -Location $location `
                     -SkuName $storageSkuName