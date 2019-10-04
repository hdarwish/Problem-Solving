// Find the sum of elements in after nth iteration for below operation on array. 

// original array 4 6 8 3 6 sum = 27 
// iteration1 -2 -2 5 -3 sum = -2 (a1= a2-a1) 

// iteration2: 0 -7 8 sum= 1 

// iteration3: 7 -15 sum =-8 

// O(n) Solution needed

// Solution
//  Nth coefficients can be computed as follows:
//     c(n,0) * a[i] - c(n, 1) * a[i+1] + c(n, 2) * a[i+2] + ... + (-1)n-1 * c(n, n) * a[i + n] 
//  1. Calculate c(n, k)
//  2. Apply weighted multiplication with c(n, k)
//  3. Calculate sum of the multiplication
#include <bits/stdc++.h>
using namespace std;

int NChooseK(int n, int k)
{
    if (n == k || k == 0)
    {
        return 1;
    }

    return NChooseK(n - 1, k) + NChooseK(n - 1, k - 1);
}

int FindNthSum(int* arr, int size, int nth)
{
    int sum = 0;
     
    int* biCoeffs = new int(nth + 1);
    int sign = -1;

    for(int i = 0; i <= nth; ++i){
        sign *= -1;
        biCoeffs[i] = NChooseK(nth, i) * sign;
    }

    int* tempArr = new int(nth + 1);
    for(int i = 1; i <= nth; ++i){
        tempArr[i] = arr[i - 1];
    }

    for(int i = nth; i < size; ++i){        
        for(int i = 0; i < nth; ++i){
            tempArr[i] = tempArr[i + 1];
        }

        tempArr[nth] = arr[i];

        for(int j = 0; j <= nth; ++j){       
            sum += biCoeffs[j] * tempArr[j];    
        }
    }

    return sum;
}

int main(int argc, char* argv[])
{
    int arr[] = {4, 6, 8, 3, 6};
    int len = sizeof(arr) /sizeof(int);
    cout << "The array: " << endl;
    copy(arr, arr + len, ostream_iterator<int>(cout, " "));
    cout << endl;

    for(int i = 0; i < len - 1; ++i){
        cout << setw(2) << left << i << "th sum: ";
        cout << setw(10) << right << FindNthSum(arr, len, i) << endl;
        cout << "------------------------------------------" << endl;
    }

    return 0;
}