#include <bits/stdc++.h>
using namespace std;

float CalcWaterInGlass(int jth, int ith, float x)
{
    assert(ith >= 0);
    assert(jth >= 0);
    assert(jth <= ith);
    
    int level = 0;
    float* prevCol = new float(ith + 1);
    float* currCol = new float(ith + 1);

    for(int i = 0; i < ith + 1; ++i){
        prevCol[i] = currCol[i] = 0.0f;
    }

    prevCol[0] = x;

    for(level = 0; level < ith; ++level){
        for(int i = 0; i <= level; ++i){
            if(prevCol[i] > 1.0f){
                currCol[i] += (prevCol[i] - 1.0f) / 2;
                currCol[i + 1] += (prevCol[i] - 1.0f) / 2;
            }
        }

        for(int i = 0; i <= level + 1; ++i){
            prevCol[i] = currCol[i];
            currCol[i] = 0.0f;
        }
    }

    float retVal = (prevCol[jth] > 1.0) ? 1.0 : prevCol[jth];

    return retVal; 
}


void DoTest(int jth, int ith, float water)
{
    cout << "Total water:" << water << endl;
    cout << "(" << jth << ", " << ith << ")";
    cout << " = " << CalcWaterInGlass(jth, ith, water) << endl;
    cout << "---------------------------------------" << endl;
}


int main(int argc, char* argv[])
{
    DoTest(0, 0, 0);
    DoTest(0, 0, 0.5);
    DoTest(0, 0, 1.0);
    DoTest(0, 0, 1.5);
    DoTest(0, 1, 0.5);
    DoTest(0, 1, 1);
    DoTest(0, 1, 1.5);
    DoTest(0, 1, 3);
    DoTest(0, 1, 3.5);
    DoTest(1, 1, 0.5);
    DoTest(1, 1, 1);
    DoTest(1, 1, 1.5);
    DoTest(1, 1, 3);
    DoTest(1, 1, 3.5);
    DoTest(0, 2, 0.5);
    DoTest(0, 2, 3.0);
    DoTest(0, 2, 4.5);
    DoTest(0, 2, 6);
    DoTest(1, 2, 1.5);
    DoTest(1, 2, 3);
    DoTest(1, 2, 5);
    DoTest(1, 2, 6);
    DoTest(2, 2, 1.5);
    DoTest(2, 2, 3);
    DoTest(2, 2, 5);
    DoTest(2, 2, 6);
    DoTest(0, 3, 8);
    DoTest(1, 3, 8);
    DoTest(2, 3, 8);
    DoTest(3, 3, 8);

    return 0;
}