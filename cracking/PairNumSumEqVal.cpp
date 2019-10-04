#include <iostream>
#include <vector>
#include <iterator>
#include <stdlib.h>
#include <algorithm>
#include <time.h>
#include <list>

using namespace std;

int print_pair(vector<int> &v, int sum)
{
    int cnt = 0;
    
    if (v.size() == 1){
        cout << "only one element in array" << endl; 
    }

    sort(v.begin(), v.end());

    int i = 0;
    while(i < v.size()){
        if(v.at(i) > sum - v.at(i) 
            && std::find(v.begin(), v.end(), sum - v.at(i)) != v.end()){
            cout << v.at(i) << " + " << sum - v.at(i) << " = " << sum << endl;
            cnt ++;
        }
        i ++;
        while(i < v.size() && v.at(i) == v.at(i - 1)) i ++;
    }

    if(count_if(v.begin(), v.end(), 
        [=](int i) -> bool{ return (i == sum / 2) && (sum % 2 == 0);}) > 1){
            cout << sum / 2 << " + " << sum / 2 << " = " << sum << endl;
            cnt ++;
    }

    return cnt;
}

int main(int argc, char* argv[])
{
    vector<int> v;
    int maximum = 20;
    //srand((unsigned)time(NULL));

    for(int i = 0; i < maximum; i++){
        int n = rand() % 35;
        v.push_back(n);
    }

    cout << "original data" << endl;
    copy(v.begin(), v.end(), ostream_iterator<int>(cout," "));
    cout << endl;

    int test_cases[] = {-1, 2, 4, 5, 10, 20, 30, 32, 40, 50, 60};
    for(int i = 0; i < sizeof(test_cases)/sizeof(int); ++i){
        cout << "Find sum = " << test_cases[i] << endl;
        int cnt = print_pair(v, test_cases[i]);
        cout << "There are " << cnt << " pairs" << endl << endl;
    }

    return 0;
}