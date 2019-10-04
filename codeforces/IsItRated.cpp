#include<bits/stdc++.h> 

using namespace std;

int main()
{
int n ;
cin>> n;
int max = INT_MAX;
bool decreasing = true;
bool rated = false; 
for (int i=0;i< n; i++)
{
    int before,after;
    cin>>before>>after;
    if (before != after) {
        rated = true;
    }
    if (before <= max){
         max = before; 
    }
    else {
        decreasing = false;
    }
}
if (rated)
{
    cout<<"rated"<<endl;
}
else if (decreasing)
{
    cout<<"maybe"<<endl;
}
else { cout<<"unrated"<<endl; }

return 0;
}