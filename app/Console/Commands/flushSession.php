<?php

declare(strict_types=1);

namespace App\Console\Commands;

use Illuminate\Console\Command;

class flushSession extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'session:flush';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Flush session register key';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        \Session::forget('simplecv_creator_session');

        return Command::SUCCESS;
    }
}
