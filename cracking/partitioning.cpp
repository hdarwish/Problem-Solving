#include <bits/stdc++.h>
using namespace std;

int main()
{
    int x ;
    string line1,line2,tmp="";
    getline(cin, line1);
    x=stoi(line1);
    list<int> smaller,equal,larger,result(x);
    getline(cin,line2);
    for(int i=1;i<line2.length();i++){
        if(line2[i]==',' || line2[i]==']' ){
            int val = stoi(tmp);
            if(val<x){
                smaller.push_back(val);
            }
            else if(val==x){
                equal.push_back(val);
            }
            else if(val>x){
                larger.push_back(val);
            }
            tmp="";
        }else{
            tmp+=line2[i];
        }
    }
    result.assign(smaller.begin(),smaller.end());
    result.insert(result.end(),equal.begin(),equal.end());
    result.insert(result.end(),larger.begin(),larger.end());
    for (list<int>::iterator it1=result.begin(); it1!=result.end(); ++it1){
        cout << ' ' << *it1;
    }

     return 0;
}