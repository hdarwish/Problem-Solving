#include <bits/stdc++.h>
using namespace std;
// FUNCTION SIGNATURE BEGINS, THIS FUNCTION IS REQUIRED
vector<int> cellCompete(int* states, int days) 
{
    vector<int> result(8),tmp(8);
    int d=days;
    for(int i=0;i<8;i++)
    {
        result[i]=tmp[i]=*states;
        states++;
    }
    while(d>0){
        for(int i=1;i<7;i++){
            if(i-1==0){
                if(tmp[i] ==  0){
                    result[i-1]=0;
                }else{
                    result[i-1]=1;
                }
            }
            if(tmp[i-1] == tmp[i+1] ){
                result[i]=0;
            }else{
                 result[i]=1;
            }
            if(i+1 == 7){
                if(tmp[i] ==  0){
                    result[i+1]=0;
                }else{
                    result[i+1]=1;
                }
            }
            
            
            
        }
        copy(begin(result), end(result), begin(tmp));
      --d;  
    }
    return result;
}
// FUNCTION SIGNATURE ENDS
int main()
{ 
    string nstr;
    getline(cin,nstr); //[1, 0, 0, 0, 0, 1, 0, 0], 1
    string tmp="";
    int arr [8],d;
    for(int i=1,j=0;i<nstr.length();i++){
        if(nstr[i]==',' || nstr[i]==']' ){
            int val =stoi(tmp);
            arr[j]=val;
            tmp="";
            i++;j++;
        }
        if(nstr[i]==',' && nstr[i-1]==']'){
           tmp+=nstr[i+2];
           d=stoi(tmp);

        }
        else{
            tmp+=nstr[i];
        }
    }
    vector<int> ans = cellCompete(arr,d);
    for (vector<int>::iterator it= ans.begin(); it != ans.end(); ++it)
    {
        cout << ' ' << *it;
    }
        
    return 0;
}