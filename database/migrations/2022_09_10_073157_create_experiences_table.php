<?php

declare(strict_types=1);

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('experiences', static function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('location');
            $table->text('description');
            $table->string('company');
            $table->string('company_url')->nullable();
            $table->date('start_date');
            $table->date('end_date')->nullable();
            $table->integer('display_order')->default(0);
            $table->integer('experience_type_id');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('experiences');
    }
};
