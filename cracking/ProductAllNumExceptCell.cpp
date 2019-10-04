#include <iostream>
#include <iomanip>
#include <cassert>
#include <algorithm>
#include <vector>

using namespace std;

int gcf(int m, int n)
{
    int t;
    if(m < n){
        t = m;
        m = n;
        n = t;
    }

    while(m % n != 0){
        t = m % n;
        m = n;
        n = t;
    }

    return n;
}

void FillArray(int* arr, int len)
{
    int product = 1;
    
    for(int i = 0; i < len; ++i){
        if(product % arr[i] != 0){
            product = product / gcf(product, arr[i]) * arr[i];
        }
    }
    
    for(int i = 0; i < len; ++i){
        arr[i] = product / arr[i];
    }  
}

void DoTest(int* arr, int len)
{
    assert(arr != NULL);
    assert(len > 0);

    cout << "Before processing" << endl;

    for(int i = 0; i < len; ++i){
        cout << setw(4) << arr[i];
    }
    cout << endl;

    FillArray(arr, len);

    cout << "After processing" << endl;

    for(int i = 0; i < len; ++i){
        cout << setw(4) << arr[i] << "  ";
    }
    cout << endl;
    cout << "-----------------------------" << endl;
}

int main(int argc, char* argv[])
{
    int arr[] = {5, 4, 8, 6, 2, 5, 1, 3, 9, 11};
    int len = sizeof(arr)/sizeof(int);
    DoTest(arr, len);

    int arr1[] = {2, 4, 8, 16};
    len = sizeof(arr1)/sizeof(int);
    DoTest(arr1, len);

    int arr2[] = {2, 4, 8, 16, 6};
    len = sizeof(arr2)/sizeof(int);
    DoTest(arr2, len);

    int arr3[] = {2, 4, 8, 16, 6, 6, 1, 1, 2};
    len = sizeof(arr3)/sizeof(int);
    DoTest(arr3, len);

 return 0;
}
