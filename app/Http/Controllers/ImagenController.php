<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Symfony\Component\HttpFoundation\File\UploadedFile;
use Illuminate\Support\Facades\File;

class ImagenController extends Controller
{
    public function uploadImagen(Request $request){

        // $img = $request->file('file')->store('avatars');
        $image = Storage::disk('public')->putFile('images', $request->file('file'));
        
        return [
            'img'=> $image,
            // 'type' => $request->file('file')->getClientOriginalExtension(),
            // 'path' => File::get(storage_path().'/app/'.$img)
        ];
    }
}
