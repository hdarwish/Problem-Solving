#include <bits/stdc++.h>
using namespace std;

void PrintFrequent(int arr[],int len)
{
    int pos = 0;
    
    while(pos < len)
    {
        int expectedPos = arr[pos] - 1;

        if(arr[pos] > 0 && arr[expectedPos] > 0){
            swap(arr[pos], arr[expectedPos]);
            arr[expectedPos] = -1;
        }
        else if(arr[pos] > 0){
            arr[expectedPos] --;
            arr[pos ++] = 0;
        }
        else{
            pos ++;
        }       
    }

    for(int i = 0; i < len; ++i){
       cout << (i + 1) << "----" << abs(arr[i]) << endl;
    }
    cout << endl;
}

void DoTest(int* arr, int len)
{
    cout << "The array is " << endl;
    for(int i = 0; i < len; ++i){
        cout << setw(3) << arr[i];
    }
    cout << endl;

    cout << "The output is " << endl;
    PrintFrequent(arr, len);
}

// Assume the len >= max(arr[i])
int main(int argc, char* argv[])
{
    int arr[] = {9,9,9,9,9,9,9,8,7,9,9};
    DoTest(arr, sizeof(arr)/ sizeof(arr[0]));

    int arr1[] = {2,1};
    DoTest(arr1, sizeof(arr1)/ sizeof(arr1[0]));

    int arr3[] = {1, 2, 2, 4};
    DoTest(arr3, sizeof(arr3)/ sizeof(arr3[0]));

    int arr2[] = {1, 3, 5, 7, 9, 1, 3, 5, 7, 9, 1};
    DoTest(arr2, sizeof(arr2)/ sizeof(arr2[0]));

    int arr4[] = {3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3};
    DoTest(arr4, sizeof(arr4)/ sizeof(arr4[0]));

    int arr5[] = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11};
    DoTest(arr5, sizeof(arr5)/ sizeof(arr5[0]));

    int arr6[] = {11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1};
    DoTest(arr6, sizeof(arr6)/ sizeof(arr6[0]));

    return 0;
}