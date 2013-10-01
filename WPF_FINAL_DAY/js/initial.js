//console.log('Kareem Beazer:\t 100\nJoe Dalton:\t\t 100');

for(i=0;i<10;i++){
    for(j=0;j<10;j++){
        for(k=0;k<10;k++){
            console.log('i:'+i+'\tj:'+j+'\tk:'+k);
        }
    }
}
var cube= [];
for(i=0;i<10;i++){
    cube[i]=[];
    for(j=0;j<10;j++){
        cube[i][j]= [];
        for(k=0;k<10;k++){
            cube [i][j][k]= i*j*k;
        }
    }
} console.log('i:'+i+'\tj:'+j+'\tk:'+k+ cube[i][j][k])