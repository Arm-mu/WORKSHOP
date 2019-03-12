$("#play").click(function(){
    $("#text").empty();
    var UserNumber = $("#UserNumber").val();
    var MaxTries = $("#MaxTries").val();
    var counter = 0;
    var RandomNumber = Math.floor(Math.random() * UserNumber) + 1;
while(Attempts != RandomNumber){
    var Attempts = prompt("เลือกตัวเลขตั้งแต่ 1 จนถึง " + UserNumber);
    counter++;
    if(counter > MaxTries-1){
        var text4 = "คุณแพ้ !! ลองใหม่อีกครั้ง !"
        $("#text").append(text4);
        break
    }
    if(Attempts == RandomNumber){
        var text1 = '<br>คุณทายถูก !!!<br>ตัวเลขที่สุ่มได้คือ ' + RandomNumber + '<br>คุณใช้ ' + counter + ' ในการทาย';
        $("#text").append(text1);
    }
}
});