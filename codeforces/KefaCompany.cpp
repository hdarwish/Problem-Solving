#include<bits/stdc++.h> 

using namespace std;

int compareInterval(long i1, long i2) 
{ 
     if(i2>i1)return -1;
     else if(i2<i1)return 1;
     else return 0;
} 
int main()
{
    int n;
    long d;
    cin>>n;
    cin>>d;
    long mf[n][2];
    for(int i=0;i<n;i++)
    {
        cin>>mf[i][0];
        cin>>mf[i][1];
    }
    sort(mf,mf+ new Comparator<long[]>() {
    @Override
    public int compare(long[] a1, long[] a2)
    {
        if(a2[0]>a1[0])return -1;
        else if(a2[0]<a1[0])return 1;
        else return 0;
    }
    });
    int j=0;
    long maxf=0;
    long best=0;
    for(int i=0;i<n;i++)
    {
        
        while( j<n && mf[j][0]-mf[i][0]<d )
        {
            maxf+=mf[j][1];
            
            j++;
        }
        if(maxf>best)best=maxf;
        
        maxf-=mf[i][1];
    }
    cout<<best;

    return 0;
}