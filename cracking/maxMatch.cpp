#include <bits/stdc++.h>
using namespace std;

int main(){
    int deviceCapacity=20,max=0;
    vector<pair<int,int>> maxpairs,result;
    vector<int> maxpairssum;
    vector<pair<int,int>> foregroundAppList ={{1,8},{2,15},{3,9}};
    vector<pair<int,int>> backgroundAppList ={{1,8},{2,11},{3,12}};
    for(vector<pair<int, int>>::iterator it1=foregroundAppList.begin();it1!=foregroundAppList.end();it1++){
        for(vector<pair<int, int>>::iterator it2=backgroundAppList.begin();it2!=backgroundAppList.end();it2++){
            int sum =it1->second + it2->second; 
            if(sum>=max && sum <= deviceCapacity){
               maxpairs.push_back(make_pair(it1->first,it2->first));
               maxpairssum.push_back(sum);
                max=sum;
            }
        }    
    }
    vector<pair<int,int>>::iterator it5=maxpairs.begin();
    vector<int>::iterator it6=maxpairssum.begin();
    for (;it5!=maxpairs.end() && it6!=maxpairssum.end(); it5++,it6++){
            if(*it6 == max){
            cout<< it5->first << ' ' << it5->second<<endl;
            result.push_back(make_pair(it5->first,it5->second));
        }
    }
   
    return 0;
}