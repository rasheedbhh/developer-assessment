<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class UserController extends Controller
{
    public function index(){
    return User::all();
    }
    public function user(Request $request){
        return $request->user();
    }
    public function getUsers(){
      $users =  DB::table('users')->where('id','!=',Auth::id())->get();
      return response()->json($users);
    }
    public function chat($id){
        $user = DB::table('users')->where('id',$id)->first();
        return response()->json($user);
    }
}
