var arr=[-3,8,7,6,5,-4,3,2,1];
var arrsorted=[];
var min=arr[0];
var pos;
var max=arr[0];
for (i=0; i<arr.length; i++)
{
        if (max<arr[i]) max=arr[i];
}

for (var i=0;i<arr.length;i++)
{
        for (var j=0;j<arr.length;j++)
        {
                if (arr[j]!="x")
                {
                        if (min>arr[j]) 
                        {
                                min=arr[j];
                                pos=j;
                        }
                }
        }
        arrsorted[i]=min;
        arr[pos]="x";
        min=max;
}
console.log(arrsorted);