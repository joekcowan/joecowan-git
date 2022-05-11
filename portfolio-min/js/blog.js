
// handle img upload
$(function(){
  $('#img_upload').change(function(){
    var input = this;
    var url = $(this).val();
    var ext = url.substring(url.lastIndexOf('.') + 1).toLowerCase();
    if (input.files && input.files[0]&& (ext == "gif" || ext == "png" || ext == "jpeg" || ext == "jpg")) 
     {
        var reader = new FileReader();

        reader.onload = function (e) {
           $('#blog_img').attr('src', e.target.result);
        }
       reader.readAsDataURL(input.files[0]);
       $('#upload_div').hide();
       $('#blog_img_div').show();
    }
    else
    {
      $('#blog_img').attr('src', 'img/undraw_profile_pic_ic5t.png');
    }
  });

});

//handle blog title preview
$('#blog_title_input').on('keyup', function(){
  const blogTitleInput = document.querySelector('#blog_title_input'); 
  const blogTitleDisplay = document.querySelector('#blog_title');
  blogTitleDisplay.textContent = blogTitleInput.value;
});

//handle author preview
$('#blog_name_input').on('keyup', function(){
  const blogAuthorInput = document.querySelector('#blog_name_input'); 
  const blogAuthorDisplay = document.querySelector('#blog_author');
  blogAuthorDisplay.textContent = blogAuthorInput.value;
});

//handle blog content preview
$('#blog_textarea').on('keyup', function(e){
  const textarea = document.querySelector('#blog_textarea'); 
  const blogBody = document.querySelector('#blog_body');
  blogBody.textContent = textarea.value;
});