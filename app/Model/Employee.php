<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Employee extends Model
{
    protected $fillable = [
        'lastname', 'firstname', 'email', 'phone', 'photo', 'address', 'sallery', 'nid', 'joining_date',
    ];
}
