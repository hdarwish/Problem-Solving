#include <bits/stdc++.h>
using namespace std;
int main()
{ 
    int n;
    cin>>n;
    int a[2][n];
    for(int i = 0; i < 2; i++) {
        for(int j = 0; j < n - 1; j++) {
            cin>>a[i][j];
        }
    }
    int b[n];
    for(int i = 0; i < n; i++) {
        cin>>b[i];
    }
    int p[2][n];
    for(int i = 0; i < 2; i++) {
        for(int j = 1; j < n; j++) {
            p[i][j] = p[i][j - 1] + a[i][j - 1];
        }
    }
    priority_queue<int> pq;
    for(int i = 0; i < n; i++) {
        pq.push(b[i] + p[0][i] + p[1][n - 1] - p[1][i]);
    }
    int ans=pq.top();
    pq.pop();
    ans+=pq.top();
    cout<<ans<<endl;
     return 0;
}