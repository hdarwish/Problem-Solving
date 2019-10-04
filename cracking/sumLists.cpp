#include <bits/stdc++.h>
using namespace std;


int main()
{
    int x ;
    string line1,line2;
    vector<int> ans;
    vector<int>::iterator it1,it2,it3,it4;
    // vector<int> first ={1, 2, 3, 4, 5, 6, 7, 8, 9};
    // vector<int> second ={9, 8, 3, 4, 5, 6, 7};
    getline(cin, line1);  //7 1 6
    getline(cin,line2); // 5 9 2
    stringstream firstss(line1);
    stringstream secondss(line2);
    vector<int> first((istream_iterator<int>(firstss)), (istream_iterator<int>())); 
    vector<int> second((istream_iterator<int>(secondss)), (istream_iterator<int>())); 
    int carry=0;
    if(first.size() < second.size()) {
        swap(first, second);
    }
    for (it1=first.begin(),it2=second.begin(); it2 != second.end(); ++it1,++it2){
        ans.push_back((carry + *it1 + *it2) % 10);
        carry=(carry + *it1 +  *it2) / 10;
    }
    it3=first.begin();
    advance(it3,second.size());
    for (; it3!=first.end(); ++it3){
            ans.push_back((carry + (*it3)) % 10);
            carry=(carry + (*it3)) / 10;
    }
    if(carry==1){
        ans.push_back(1);
    }
    for (it4=ans.begin(); it4!=ans.end(); ++it4){
        cout << setw(4) << *it4;
    }
     return 0;
}