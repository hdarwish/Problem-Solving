#include <bits/stdc++.h>
using namespace std;
#define ll long long
ll mod=1000000007;

		
ll power(int a, int b, int MOD)
{
    ll x=1,y=a; 
    while(b > 0)
    {
        if(b%2 == 1)
        {
            x=(x*y);
            if(x>MOD) x%=MOD;
        }
        y = (y*y);
        if(y>MOD) y%=MOD; 
        b /= 2;
    }
    return x;
}
int main()
{  
    ll n;
    cin>>n;
    int ans= (power(3,3*n,mod) - power(7,n,mod) + mod)%mod;
	cout<<ans<<endl;
     return 0;
}