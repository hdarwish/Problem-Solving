#include <bits/stdc++.h>
using namespace std;

int main()
{
    int n ;
    string line1,line2,tmp="";
    getline(cin, line1);
    n=stoi(line1);
    list<string> duplicates(n);
    list<string>::iterator it1,it2;
    getline(cin,line2);
    for(int i=1,j=0;i<line2.length();i++){
        if(line2[i]==',' || line2[i]==']' ){
            duplicates.push_back(tmp);
            tmp="";
            i++;
        }else{
            tmp+=line2[i];
        }
    }
    set<string> found;
    for (list<string>::iterator x = duplicates.begin(); x != duplicates.end();) {
    if (!found.insert(*x).second) {
        x = duplicates.erase(x);
    }
    else {
        ++x;
    }
    }
    // duplicates.sort();
    // duplicates.unique(); 
    for (it1=duplicates.begin(); it1!=duplicates.end(); ++it1){
        cout << ' ' << *it1;
        
    }
    
    int i=0;
    for (it1=duplicates.begin(); it1!=duplicates.end(); ){
        if(i == ((duplicates.size()-1)/2)+((duplicates.size()-1)%2))
        {
            it1 = duplicates.erase(it1);
        }
        else{
        cout << ' ' << *it1;
        ++it1;
        }
        i++;
    }
    return 0;
}