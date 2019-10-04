#include <bits/stdc++.h>
using namespace std;

int main()
{  
    int n,m,count=0;
    cin>>n>>m;
    int arr[n];
    for(int i=0; i<n;i++)
    {
        cin>>arr[i];
    }
    sort(arr, arr+n);
    int j=n-1;
    while(j>=0 && m>0)
    {
        m-=arr[j];
        j--;
        count++;
    }
    cout<<count<<endl;
     return 0;
}