m=5000
ver=[];
for i in range(0,m+1): ver.append(0)
for a in range(1,m+1):
    for b in range(1,m+1):
        c = a * b;
        if c<=m: ver[c]+=1
primes=[]
for i in range(1,m+1):
    if ver[i]==2 and (not i in primes): primes.append(i);
print primes

goldbach = [];
for i in range(0,m+1): goldbach.append(False);
for p1 in primes:
    for p2 in primes:
        h = p1 + p2
        if h<=m and (h%2==0):
            goldbach[h]=True
            print "%d + %d = %d"%(p1,p2,h)


for i in range(4,len(goldbach)):
    if goldbach[i]: print "Goldbach was right for: %d"%i
