function searchWiki(val){
    var input = val;
    var url = "https://fr.wikipedia.org/w/api.php?action=opensearch&search="+input+"&format=json&callback=?";
    $.ajax({
      type:'GET',
      url:url,
      async:false,
      dataType:'json',
      success: function(data){
                 console.log(data);
        $('#output').html('');
        data[1] = data[1].reverse();
        data[2] = data[2].reverse();
        data[3] = data[3].reverse();
                    for(var i=0;i<data[1].length;i++){
                    $('#output').prepend('<li>'+data[1][i]+"<p>"+data[2][i]+'</p> <a target="blank" href="'+data[3][i]+'">More <i class="fa fa-arrow-right" aria-hidden="true"></i></a> </li>');
                  }
                 },
      error:function(errorMessage){
        alert('fail');
      },
    })
    
    }
  