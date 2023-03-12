let arr=[4,5,61,7,133,9]
let n=parseInt(prompt("Enter then element"));
function nSmall(array,n)
{
	for(i=0;i<arr.length;i++)
	{
		for(j=i+1;j<arr.length;j++)
		{
			if(arr[i]>arr[j])
			{
				temp=arr[j];
				arr[j]=arr[i];
				arr[i]=temp;
			}    
		}
		
	}
	console .log(arr);
	let small=arr[n-1]
	return small;
}
console.log(nSmall(arr,n));