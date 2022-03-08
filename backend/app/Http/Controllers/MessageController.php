<?php

namespace App\Http\Controllers;

use App\Events\DirectMessageEvent;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class MessageController extends Controller
{
    public function sendDirectMessage(Request $request)
    {
        $data = $request->only(['message', 'authUserId']);
        broadcast(new DirectMessageEvent($data))->toOthers();
        return response()->json(['success' => 'Message Successfully Sent'], Response::HTTP_OK);
    }
}
