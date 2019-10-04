#include <bits/stdc++.h>
using namespace std;
#define ll long long
ll maxVal = 0;
int generalizedGCD(int num, int arr[])
{
    
    ll maxVal = 0;
    bool isGCD = false;
    int ans;
    for(int i=0;i<num;i++)
    {
        if(arr[i]>maxVal)maxVal=arr[i];
    }
    for(int i=maxVal;i>0;i--){
        int k=0;
        while(k<num){
            if(arr[k]%i != 0){
                isGCD = false;
                break;
            }
            isGCD = true;
            k++;
        }
        if(isGCD){
            ans=i;
           break;
        }
         
        
    }
    return ans;
}

int main()
{ 
    string nstr,arrstr;
    getline(cin,nstr);
    int n=stoi(nstr);
    int arr[n];
    getline(cin,arrstr);
    string tmp="";
    for(int i=1,j=0;i<arrstr.length();i++){
        if(arrstr[i]==',' || i == arrstr.length()-1){
            int val =stoi(tmp);
            arr[j]=val;
            tmp="";
            i++;j++;
        }else{
            tmp+=arrstr[i];
        }
    }
    // int* parr = arr;
    int ans = generalizedGCD(n, arr);
    cout<<ans;
     return 0;
}