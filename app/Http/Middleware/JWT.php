<?php

namespace App\Http\Middleware;

use Closure;
use Tymon\JWTAuth\facades\JWTAuth;

class JWT extends Middleware
{
    public function handle($request, Closure $next)
    {
        JWTAuth::parseToken()->authenticate();
        return $next($request);
    }
}