<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\User;
use Auth;
use Storage;

class HomeController extends Controller
{
    public function index(User $user)
    {
        return Inertia::render("Home", ["user" => $user->first()]);
    }
    
    public function edit(User $user)
    {
        return Inertia::render("Edit", ["user" => $user->first()]);
    }
    
    public function update(Request $request)
    {
        $image = $request->image;
        // バケットの`profile`フォルダへアップロード
        $path = Storage::disk('s3')->putFile('profile', $image, 'public');
        
        Storage::disk('s3')->delete(Auth::user()->image);
        Auth::user()->image = $path;
        Auth::user()->save();
        
        return redirect()->route("home");
    }
}
