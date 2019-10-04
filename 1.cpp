#include <stdio.h>
#include <math.h>

int Input(float *a)//ʵ�����ݵ�¼��
{
	int i,n;
	printf("������Ҫ¼������ݸ�����");
	scanf("%d",&n);
	//printf("������%d������: ",n);
	for(i=0;i<n;i++)
	{
		printf("�������%d������: ",i+1);
		scanf("%f",&a[i]);
	}
	printf("\n-----------------------------------------------------------------\n");
	return n;
}

float Arimean(float *a,int n)//����ƽ��ֵArithmetic mean
{
	float sum=0;
	int i;
	for(i=0;i<n;i++)
		sum+=a[i];
	return sum/(float)n;
}

float Std_Dev(float *a,int n)//Standard Deviation��׼ƫ��
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

int judgeF(float a,float s,float avernum)//�ж�����a�Ƿ��ǻ�ֵ
{
	return abs(a-avernum)>3*s;
}

int Delete(float *a,int n)//ɾ�������еĻ�ֵ
{
	int i,j,np;
	float avernum = Arimean(a,n);
	float s = Std_Dev(a,n);
	
	np = n;
	for(i=0;i<np;i++)
	{
		if(judgeF(a[i],s,avernum))
		{
			printf("%.3f�ǻ�ֵ\n",a[i]);
			for(j=i;j<np-1;j++)
			{
				a[j] = a[j+1];
			}
			np--;
		}
	}
	if(np < n)
	{
		printf("����ƽ��ֵ��%f\n",avernum);
	    printf("��׼ƫ�%f\n",s);

		printf("New �Ϸ�����:");
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
	printf("����ƽ��ֵ��%f\n",avernum);
	printf("��׼ƫ�%f\n",s);
	printf("����ƽ��ֵ�ı�׼ƫ�A�಻ȷ���ȣ���%f\n",sx);
	printf("B�಻ȷ���ȣ�%f\n",B/sqrt((float)3));
	printf("�ϳɲ�ȷ���ȣ�%f\n",dX(sx,B));
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

	printf("������������ȷ���ȣ�");
	scanf("%f",&B);

	Output(a,n,B);
	return 0; 
}
