<div>
    @foreach ($users as $user)
        <h1>{{$user->name}}</h1>
        <img src="{{asset($user->image)}}" alt="" style="width:100px">
        <p>{{$user->email}}</p>
    @endforeach
</div>