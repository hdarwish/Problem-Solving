#include <iostream>
#include <iomanip>
#include <cassert>
#include <limits>       // std::numeric_limits

using namespace std;

template<int M, int N> void DisplayMatInfo(int (&arr)[M][N])
{
 assert(M == 3 && N == 3);
 
 int maxCol(0), minCol(0), maxRow(0), minRow(0);
 long long maxColSum = numeric_limits<long long>::min();
 long long maxRowSum = numeric_limits<long long>::min();
 long long minColSum = numeric_limits<long long>::max();
 long long minRowSum = numeric_limits<long long>::max();
 
 for (int i = 0; i < M; ++i){
 long long s(0);
 for (int j = 0; j < N; ++j){
 s += arr[i][j];
 cout << setw(5) << arr[i][j];
 }

 cout << endl;

 if (s > maxRowSum){
 maxRow = i;
 maxRowSum = s;
 }

 if (s < minRowSum){
 minRow = i;
 minRowSum = s;
 }
 }

 for (int j = 0; j < M; ++j){
 long long s(0);
 for (int i = 0; i < N; ++i){
 s += arr[i][j];
 }

 if (s > maxColSum){
 maxCol = j;
 maxColSum = s;
 }

 if (s < minColSum){
 minCol = j;
 minColSum = s;
 }
 }

 cout << "Row " << maxRow << " has max sum: " << maxRowSum << endl;
 cout << "Row " << minRow << " has min sum: " << minRowSum << endl;
 cout << "Col " << maxCol << " has max sum: " << maxColSum << endl;
 cout << "Col " << minCol << " has min sum: " << minColSum << endl;
}

int main()
{
 int arr[][3] = {
 { 3, - 5, 10},
 { 6, 2, - 1 },
 { 2, 6, 1 }
 };

 DisplayMatInfo(arr);

 return 0;
}