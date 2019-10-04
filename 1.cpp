#include <stdio.h>
#include <math.h>

int Input(float *a)//实验数据的录入
{
	int i,n;
	printf("请输入要录入的数据个数：");
	scanf("%d",&n);
	//printf("请输入%d个数据: ",n);
	for(i=0;i<n;i++)
	{
		printf("请输入第%d个数据: ",i+1);
		scanf("%f",&a[i]);
	}
	printf("\n-----------------------------------------------------------------\n");
	return n;
}

float Arimean(float *a,int n)//算术平均值Arithmetic mean
{
	float sum=0;
	int i;
	for(i=0;i<n;i++)
		sum+=a[i];
	return sum/(float)n;
}

float Std_Dev(float *a,int n)//Standard Deviation标准偏差
{
	float avernum,s=0;
	int i;
	avernum = Arimean(a,n);

	for(i=0;i<n;i++)
	{
		s += (a[i]-avernum)*(a[i]-avernum);
	}

	s = sqrt(s/(float)(n-1));

	return s;
}

float Sx(float s,int n)
{
	float sx;
	sx = s/sqrt((float)n);

	return sx;
}

int judgeF(float a,float s,float avernum)//判断数据a是否是坏值
{
	return abs(a-avernum)>3*s;
}

int Delete(float *a,int n)//删除数据中的坏值
{
	int i,j,np;
	float avernum = Arimean(a,n);
	float s = Std_Dev(a,n);
	
	np = n;
	for(i=0;i<np;i++)
	{
		if(judgeF(a[i],s,avernum))
		{
			printf("%.3f是坏值\n",a[i]);
			for(j=i;j<np-1;j++)
			{
				a[j] = a[j+1];
			}
			np--;
		}
	}
	if(np < n)
	{
		printf("算数平均值：%f\n",avernum);
	    printf("标准偏差：%f\n",s);

		printf("New 合法数据:");
		for(i=0;i<n;i++) printf("%.3f ",a[i]);
		printf("\n-----------------------------------------------------------------\n");
	}
	return np;
}

float dX(float sx,float B)
{
	B = B/sqrt((float)3);
	return sqrt(sx*sx+B*B);
}

void Output(float *a,int n,float B)
{
	float avernum = Arimean(a,n);
	float s = Std_Dev(a,n);
	float sx = Sx(s,n);

	printf("\n-----------------------------------------------------------------\n");
	printf("算数平均值：%f\n",avernum);
	printf("标准偏差：%f\n",s);
	printf("算数平均值的标准偏差（A类不确定度）：%f\n",sx);
	printf("B类不确定度：%f\n",B/sqrt((float)3));
	printf("合成不确定度：%f\n",dX(sx,B));
	printf("\n-----------------------------------------------------------------\n");
}

int main()
{
	float a[100],B;//averagenumber
	int n,np;
	n=Input(a);

	np = Delete(a,n);

	while(np < n)
	{
		n = np;
		np = Delete(a,n);
	}

	n = np;

	printf("请输入仪器不确定度：");
	scanf("%f",&B);

	Output(a,n,B);
	return 0; 
}
