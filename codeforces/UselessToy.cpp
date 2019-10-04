#include <bits/stdc++.h>
using namespace std;

int main()
{  
    int cwPositions[] = { 118, 60, 94, 62 }; // v,<,^,>
    int ccwPositions[] = { 118, 62, 94, 60 }; // v,>,^,<
    string input;
    getline(cin, input);
    int sec;
    cin>>sec;
    int start = stoi(to_string(input[0])) ;
    int end = stoi(to_string(input[2])) ;
    int cwstartIndex = distance(cwPositions,find(cwPositions,cwPositions+4, start));
    int ccwstartIndex = distance(ccwPositions,find(ccwPositions,ccwPositions+4,start));
    if (end == cwPositions[((cwstartIndex + sec)%4)])
    {
        if (end == ccwPositions[((ccwstartIndex + sec) % 4)])
        {
            cout<<"undefined"<<endl;
            return 0;
        }
        cout<<"cw"<<endl;
        return 0;
        
    }else if (end == ccwPositions[((ccwstartIndex + sec) % 4)])
    {
        cout<<"ccw"<<endl;
        
    }
     return 0;
}