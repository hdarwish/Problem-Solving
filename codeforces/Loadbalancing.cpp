#include <bits/stdc++.h>
using namespace std;

int main()
{  
    int n;
    cin>> n;
    long sum=0;
    int a[n];
    for(int i=0;i<n;i++)
    {
        cin>>a[i];
        sum+=a[i];
    }
    long need= sum/n;
    long extra = sum%n;
    long ans = 0;
    long count = 0;
    for(int i = 0;i<n;i++){
        if(a[i] > need){
            ans+=a[i]-need;
            count++;
        }
    }
    ans-=min(count, extra);
    cout<<ans;

     return 0;
}