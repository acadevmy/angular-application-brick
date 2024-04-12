import 'dart:io';
import 'package:mason/mason.dart';

void run(HookContext context) async {
  await runPnpm(context: context);

  await runGit(context: context);
}

Future<void> runPnpm({
  required HookContext context,
}) async {
  context.logger.info('📦 Running pnpm i');
  await Process.run('pnpm', ['i']);
  context.logger.success('📦 pnpm configured successfully 🚀');
}

Future<void> runGit({
  required HookContext context,
}) async {
  context.logger.info('📚 Staging initial scaffold files...');
  await Process.run('git', ['add', '.'],);

  context.logger.info('📚 Committing "chore(scaffold): angular application"...');
  await Process.run(
    'git',
    ['commit', '-m', '"chore(scaffold): angular application"'],
  );

  context.logger.success('📚 Git commited successfully! 🚀');
}
