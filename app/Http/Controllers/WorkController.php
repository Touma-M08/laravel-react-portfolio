<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class WorkController extends Controller
{
    public function show($work) 
    {
        if($work == 0) {
            return Inertia::render("Works/ShowGathery");
        }
    }
}
