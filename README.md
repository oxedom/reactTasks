Task Scheduler is the right tool — it survives restarts by design, and it has a built-in random delay feature so you don't need to reschedule anything yourself.
One catch worth knowing up front: the task must run only when the user is logged on. Tasks set to "run whether logged on or not" execute in a non-interactive session with no audio device, so the sound plays to nothing.
1. Put the MP3 somewhere stable, e.g. C:\Sounds\sound.mp3.
2. Create the player script at C:\Sounds\play.ps1. Note that SoundPlayer only handles WAV, so this uses MediaPlayer instead:
Powershell
The sleep at the end matters — PowerShell exiting kills playback mid-file.
3. Optional: avoid a console flash. Save as C:\Sounds\run.vbs:
Vbscript
4. Register the task. Run this in PowerShell (regular user, no admin needed):
Powershell
RandomDelay = "PT9H" picks a fresh random offset each day, so it fires somewhere between 9 AM and 6 PM. -StartWhenAvailable covers the case where the machine was off or logged out at the chosen moment — it runs as soon as it can instead.
To remove it later: Unregister-ScheduledTask -TaskName "DailyChime" -Confirm:$false
Two things that will quietly break it: the machine being asleep at trigger time (add -WakeToRun to the settings if that's likely), and the volume being muted. And assuming your friend isn't in on it yet — a random daily noise gets old fast when you can't find the source, so it's worth being the one to tell them.