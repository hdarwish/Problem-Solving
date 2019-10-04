#include<bits/stdc++.h> 

using namespace std;

int main()
{
    int n,k;
    cin>>n>>k;
    string bs;
    cin>>bs;
    vector<char> barr(26);
    for (int i = 0; i < bs.size(); i++)
    {
        barr[bs[i] - 'a']++;
    }
    for (int i = 0; i < 26; i++)
    {
        if (!( barr[i]  <= k))
        {
            cout<<"NO"<<endl;
            return 0;
        }
    }
         cout<<"YES"<<endl;
    return 0;
}