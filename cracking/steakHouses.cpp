#include <bits/stdc++.h>
using namespace std;
vector<pair<int, int> > nearestXsteakHouses(int totalSteakhouses, 
                                            int** allLocations, 
										    int numSteakhouses)
{
    vector<pair<int, int>> result;
    map<double,pair<int, int>> mymap;
    for(int i=0;i<totalSteakhouses;i++){
        
           double distance = sqrt(allLocations[i][0]*allLocations[i][0] + allLocations[i][1] * allLocations[i][1]);
           pair<int,int> mp (allLocations[i][0],allLocations[i][1]);
           mymap[distance] = mp;
        }
    int j=numSteakhouses;  
    for(map<double,pair<int, int>>::iterator it1=mymap.begin();it1!=mymap.end(),j>0;it1++){
        result.push_back(it1->second);
        j--;
    }
    return result;
}

int main(){
    int arr[3][2] = {{1,-3},{1,2},{3,4}};
    vector<pair<int, int>> result;
    map<double,pair<int, int>> mymap;
    for(int i=0;i<3;i++){
        
           double distance = sqrt(arr[i][0]*arr[i][0] + arr[i][1] * arr[i][1]);
           pair<int,int> mp (arr[i][0],arr[i][1]);
           mymap[distance] = mp;
        }
    int j=2;  
    for(map<double,pair<int, int>>::iterator it1=mymap.begin();it1!=mymap.end(),j>0;it1++){
        
        result.push_back(it1->second);
        j--;
    }
   
    return 0;
}