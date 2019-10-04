#include<bits/stdc++.h> 

using namespace std;

int main()
{
    int n,k,count = 0;;
    cin>>n>>k;
    double sum = 0;
    for(int i=0; i< n; i++)
    {
        int mark;
        cin>>mark;
        sum += mark;
    }
    while( round(sum/n)<k )
    {
        sum += k;
        n++;
        count++;
    }
    cout<<count<<endl;
    return 0;
}