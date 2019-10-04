#include <bits/stdc++.h>
using namespace std;

int main()
{
    int x ;
    bool isPalindrome=true;
    string line1,line2;
    list<char>::iterator it1,it2;
    getline(cin, line1);  //a a b b
    stringstream strss(line1);
    list<char> str((istream_iterator<char>(strss)), (istream_iterator<char>())); 
    for (list<char>::iterator it3=str.begin(); it3!=str.end(); ++it3){
        cout << ' ' << *it3;
    }

    cout << endl << str.size();
    it1=it2=str.begin();
    if(str.size() % 2 == 0){
        advance(it1,(str.size()) / 2 - 1 );
        advance(it2,(str.size()) / 2 );
        for (; it1!=str.begin(),it2!=str.end(); --it1,++it2){
            if(*it1 != *it2){
                isPalindrome=false;
                break;
            }
        }
    }else{
        advance(it1,(str.size()) / 2 - 1);
        advance(it2,(str.size()) / 2 + 1);
        for (; it1!=str.begin(),it2!=str.end(); --it1,++it2){
            if(*it1 != *it2){
                isPalindrome=false;
                break;
            }
        }
    }
    

     
     cout << "is Palindrome? " << (isPalindrome? "True":"False");
    
     return 0;
}