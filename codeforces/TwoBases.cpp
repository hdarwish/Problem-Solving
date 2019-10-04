#include <bits/stdc++.h>
using namespace std;

int main()
{  
    int n,bx;
    cin>>n>>bx;
    long x=0;
    for(int i=n-1;i>=0;i--)
    {
        long xi;
        cin>>xi;
        x+= pow(bx, i) * xi;
    }
    int m, by;
    cin>>m>>by;
    long y=0;
    for(int i=m-1;i>=0;i--)
    {
        long yi;
        cin>>yi;
        y+= pow(by, i) * yi;
    }
    if(x<y)
        cout<<"<"<<endl;
    else if(x>y)
        cout<<">"<<endl;
    else
        cout<<"="<<endl;
     return 0;
}