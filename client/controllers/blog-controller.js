app.controller('blogController',['$scope','$http',blogController]);

function blogController($scope,$http){

    //Dummy!!!!
    var currentUser = "HC101";
    $scope.logscope = function(){console.log($scope)};


    $scope.action = 'Save';
    $scope.editmode = false;
    $scope.saveBlog = saveBlog;
    $scope.loadBlog = loadBlog;
    $scope.newBlog = newBlog;
    $scope.editBlog = editBlog;
    $scope.dirtyStatus = dirtyStatus;
    //$scope.saveEdit = saveEdit;
    $scope.blogs = [];
    $scope.blog = $scope.blogs[0];
    $scope.isDirty = false;
    $scope.addComment = addComment;

    init();
    function dirtyStatus(status){
        $scope.isDirty = status;
    }

    function editMode(boolean){
        $scope.editmode = boolean;
    }

    function editBlog(blog){
        dirtyCheck('editBlog')
        if(blog)loadBlog(blog);
        //check permissions
        $scope.editmode = true;
    }

    function loadBlog(blog){
        dirtyCheck('loadBlog');
        editMode(false);
        $scope.blog = blog;
    }

    function newBlog(){
        dirtyCheck('newBlog');
        editMode(true);
        $scope.blog = {};

    }
    function dirtyCheck(caller){
        if(!$scope.blogForm.$pristine) {
            if(userResult('save changes? caller: ' + caller)) saveBlog();
        }
    }

    function userResult(message){
        return window.confirm(message);
    }

    function saveBlog(redirectBlog, screenMode){
        if(!$scope.blog._id){
            $http.post('/api/blogs',$scope.blog).success(function(data){
                $scope.blogs.push(data);
            });
        } else {
            $http.put('/api/blogs',$scope.blog).success(function(data){
                $scope.blogs.forEach(function(element){
                    if(element._id == data.id) element = data;
                });
            });
        }


        if(redirectBlog){
            $scope.blog = redirectBlog;
            dirtyCheck(true)
            screenMode();
        } else {
            $scope.isDirty = false;
            editMode(false);
        }
        $scope.blogForm.$pristine=true;
    }


    function init(){
        $http.get('/api/blogs').success(function(data){
            $scope.blogs = data;
            $scope.blog = $scope.blogs[0];
        });
    }
    function findBlogById(id){
        $scope.blogs.forEach(function(el){
           if(el._id = id) return el;
        });
    }
    function addComment(){
        console.log('add comment');
        var comment = {
            body: $scope.comment,
            date: new Date(),
            userId: currentUser
        };
        $scope.blog.comments.push(comment);
        $scope.comment = '';
        saveBlog();
    }
}