//Get all posts

$('#Button1').on('click',function(){
	$('.display').text('');
	$.get(' https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/posts',function(post){
	post.forEach(function (post){
		var text=JSON.stringify(post)
		var item=$('<p></p>');
		item.text(text);
		$('.display').append(item);
		});
	console.log(post)
	})
 });


//Get post with id of 10
$('#Button2').on('click',function(post){
	$('.display').text('');
	$.get(' https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/posts/10',function(post){
 
		var text=JSON.stringify(post)
		var item=$('<p></p>');
		item.text(text);
		$('.display').append(item);
		console.log(post);
 	});
})


//Get the comments from post with id of 12 
$('#Button3').on('click',function(post){
	$('.display').text('');
	
	$.get(' https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/posts/12/comments',function(post){
		post.forEach(function(post){
			var text=JSON.stringify(post);
			var item=$('<p></p>');
			item.text(text);
			$('.display').append(item);
			console.log(post);
		})
	});
})


//Get all the posts from user with id of 2
$('#Button4').on('click',function(post){
	$('.display').text('');
	$.get(' https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/user/2/posts',function(post){
		var text=JSON.stringify(post);
		var item=$('<p></p>');
		item.text(text);
		$('.display').append(item);
		console(post);
	});

})


//Create a new post and log the id generated for it by the server
$("#Button5").on('click',function(post){
	$('.display').text('');

$.post('https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/posts',{
	userId:1,
	title:'Here is my post',
	body:"That is my first post"
},function(post){
	var item=$('<p></p>');
	item.text(post.id);
	$('.display').append(item);
	console.log(post,"new post created")
	})

})

//Replace the post with id of 12 and render the responseJSON
$('#Button6').on('click',function(post){
	$('.display').text('');

	$.ajax({
	method:'POST',
	url:'https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/posts/12/comments',
	data:{
		userId:1,
		title:'Here is my post',
		body:"That is my first post"
	},
	complete:function(response){
		console.log(response.responseJSON)	
		}
	})

})

//Update the title of post with id of 12 and render responseJSON
$("#Button7").on('click',function(post){
$.ajax({
	method:'PATCH',
	url:'https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/posts/12/comments',
	data:{
		title:"Title is patched"
	},
	complete: function(response){
		console.log(this.responseJSON);
		}
	})
})
//Delete the post with id of 12 and render a success message
$("#Button8").on('click',function(post){
$('.display').text('');
$.ajax({
	method:'DELETE',
	url:'https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/posts/12/comments',
	complete: function(response){
		console.log(this.statusText);
		}
	})

})

