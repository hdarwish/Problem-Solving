#include <iostream>
#include <iomanip>
// #include <algorithm>
 #include <iterator>

using namespace std;

int Compare( const void *arg1, const void *arg2 )
{
    if (*(int*)arg1 < *(int *)arg2){
        return -1;
    }
    else if (*(int*)arg1 == *(int *)arg2){
        return 0;
    }
    else{
        return 1;
    }
}

void PrintArray(int* arr, int len)
{
    for(int i = 0; i < len; ++i){
        cout << setw(4) << arr[i];
    }
    cout << endl;
}

void UnionAndIntersection(int* arr1, int len1, 
                              int* arr2, int len2, 
                              int* un, int& unLen, 
                              int* intersec, int& inLen)
{
    qsort(arr1, len1, sizeof(arr1[0]), Compare);
    cout << "The array 1 after sorting is : " << endl;
    PrintArray(arr1, len1);

    qsort(arr2, len2, sizeof(arr2[0]), Compare);
    cout << "The array 2 after sorting is : " << endl;
    PrintArray(arr2, len2);

    int *pArr1(arr1), *pArr2(arr2), *pUnion(un), *pIntersection(intersec);
    while(pArr1 < arr1+len1 && pArr2 < arr2+len2){
        if(*pArr1 == *pArr2){
            *pUnion++ = *pArr1++;
            *pIntersection++ = *pArr2++;
        }else if(*pArr1 < *pArr2){
            *pUnion++ = *pArr1++;
        }else{
            *pUnion++ = *pArr2++;
        }

        while(pArr1 < arr1+len1 && *pArr1 == *(pArr1-1)){pArr1++;}
        while(pArr2 < arr2+len2 && *pArr2 == *(pArr2-1)){pArr2++;}
    }

    while(pArr1 < arr1+len1){
        *pUnion++ = *pArr1++;
        while(pArr1 < arr1+len1 && *pArr1 == *(pArr1-1)){pArr1++;}
    }    

    while(pArr2 < arr2+len2){
        *pUnion++ = *pArr2++;
        while(pArr2 < arr2+len2 && *pArr2 == *(pArr2-1)){pArr2++;}
    }   

    unLen = pUnion - un;
    inLen = pIntersection - intersec;
}


int main(int argc, char* argv[])
{
    int *arr1, *arr2;
    int len1, len2;

    int *un, *intersec;

    for(int i = 0; i < 10; ++i){
        len1 = rand() % 10 + 1;
        len2 = rand() % 10 + 1;

        arr1 = new int(len1);
        arr2 = new int(len2);
        intersec = new int((len1 < len2) ? len1 : len2);
        un = new int(len1 + len2);
        int unLen(0), inLen(0);

        for(int j = 0; j < len1; j++){
            arr1[j] = rand() % 5;
        }

        for(int j = 0; j < len2; j++){
            arr2[j] = rand() % 5;
        }

        cout << "The array 1 is : " << endl;
        PrintArray(arr1, len1);

        cout << "The array 2 is : " << endl;
        PrintArray(arr2, len2);

        UnionAndIntersection(arr1, len1, arr2, len2,
            un, unLen, intersec, inLen);

        cout << "The union of two arrays is :" << endl;
        PrintArray(un, unLen);
        cout << "The intersection of two array is: " << endl;
        PrintArray(intersec, inLen);
        cout << "------------------------------------------" << endl;
        
    
    }

    return 0;
}