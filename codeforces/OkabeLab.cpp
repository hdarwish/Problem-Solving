#include <bits/stdc++.h>
using namespace std;

int main()
{  
    int n;
    cin >> n;
    int lab[n][n];
    for (int i = 0; i < n; i++)
    {
        for (int j = 0; j < n; j++)
        {
            int val;
            cin>>val;
            lab[i][j] = val;
        }
    }
    for (int i = 0; i < n; i++)
    {
        for (int j = 0; j < n; j++)
        {
            if (lab[i][j] == 1) continue;
            int good = 0;
            for (int k = 0; k < n; k++)
            {
                for (int l = 0; l < n; l++)
                {
                    if (lab[i][j] == lab[i][k] + lab[l][j])
                        good = 1;
                }
            }
            if (good == 0)
            {
                cout<<"No"<<endl;
                return 0;
            }
        }
    }
    cout<<"Yes"<<endl;
     return 0;
}